/**
 * Utilities Module
 * Helper functions dan constants
 */

const Utils = {
    /**
     * Debounce function untuk optimize performance
     * @param {Function} func - Function yang akan di-debounce
     * @param {Number} delay - Delay dalam milliseconds
     * @returns {Function} - Debounced function
     */
    debounce: (func, delay = 300) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    },

    /**
     * Throttle function untuk optimize scroll events
     * @param {Function} func - Function yang akan di-throttle
     * @param {Number} limit - Limit dalam milliseconds
     * @returns {Function} - Throttled function
     */
    throttle: (func, limit = 300) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Format currency to Rupiah
     * @param {String|Number} price - Price value
     * @returns {String} - Formatted price
     */
    formatPrice: (price) => {
        if (typeof price === 'string') return price;
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(price);
    },

    /**
     * Validate email
     * @param {String} email - Email to validate
     * @returns {Boolean}
     */
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    /**
     * Get random item from array
     * @param {Array} array - Array to get random item from
     * @returns {*} - Random item
     */
    getRandomItem: (array) => {
        return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Clone object deeply
     * @param {Object} obj - Object to clone
     * @returns {Object} - Cloned object
     */
    deepClone: (obj) => {
        return JSON.parse(JSON.stringify(obj));
    },

    /**
     * Log dengan timestamp
     * @param {String} message - Message to log
     * @param {String} type - Log type (log, warn, error)
     */
    log: (message, type = 'log') => {
        const timestamp = new Date().toLocaleTimeString();
        console[type](`[${timestamp}] ${message}`);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
