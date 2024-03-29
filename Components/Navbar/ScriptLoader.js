import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const loadScripts = async () => {
      // Load JavaScript files
      const scripts = [
       
        '/js/main.js',
        
       

      ];

      for (const script of scripts) {
        await loadScript(script);
      }
    };

    loadScripts();

    // Clean up function
    return () => {
      // Unload scripts if necessary
    };
  }, []);

};

// Function to load script dynamically
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export default MyComponent;
