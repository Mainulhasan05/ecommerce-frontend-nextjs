import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const loadScripts = async () => {
      // Load JavaScript files
      const scripts = [
        'js/jquery-3.3.1.min.js',
        'js/bootstrap.min.js',
        'js/jquery.nice-select.min.js',
        'js/jquery-ui.min.js',
        'js/jquery.slicknav.js',
        'js/mixitup.min.js',
        'js/owl.carousel.min.js',
        'js/main.js'
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
