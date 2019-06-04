import WebFont from "webfontloader";

const loadFont = () => {
    WebFont.load({
        google: {
            families: ["Fira Sans:400,900", "sans-serif"]
        }
    });
};

export { loadFont };
