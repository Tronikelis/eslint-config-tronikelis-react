module.exports = {
    extends: [
        "tronikelis",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
    ],
    plugins: ["react", "react-hooks"],
    rules: {
        // disabled recommended rules
        "react/prop-types": "off",
        "react/display-name": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
