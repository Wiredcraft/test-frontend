Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn()
        }
    }
})
