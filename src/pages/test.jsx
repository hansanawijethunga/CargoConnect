import React, { useState, useEffect } from 'react';

function Test() {
    const [count, setCount] = useState(0);

    // Direct update in the onClick handler
    const handleClick = () => {
      setCount(count + 1); // Updating the state
    };
  
    // Simulating an external update (e.g., an API call or timer)
    const externalUpdate = () => {
      setTimeout(() => {
        setCount(count + 2); // External update that also affects count
      }, 2000);
    };
  
    // useEffect hook to handle side effect (document title update)
    useEffect(() => {
      document.title = `You clicked ${count} times`; // Update document title every time count changes
  
      // Cleanup (optional)
      return () => {
        console.log('Cleanup if needed (for example, canceling timers)');
      };
    }, [count]); // This effect runs whenever 'count' changes
  
    // Start the external update when the component mounts
    useEffect(() => {
      externalUpdate();
    }, []); // Empty dependency means this effect runs only once when the component mounts
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
}


export default Test;