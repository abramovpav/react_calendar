function getValue(dict, key, defaultValue) {
    if (!(key in dict)) {
        return defaultValue;
    }
    return dict[key];
}

export default getValue;
