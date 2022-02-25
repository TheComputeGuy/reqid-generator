function getRequestId(appNickName, environment){
    let requestId = '';
    if (appNickName) {
        requestId = requestId + appNickName + '-';
    }
    if (environment) {
        requestId = requestId + environment + '-';
    }

    requestId = requestId + Date.now();

    return requestId;
}

module.exports.templateTags = [{
    name: 'ReqIDGenerator',
    displayName: 'Request ID Generator',
    description: 'Provides a formatted Request ID with app nickname, environment and current epoch time.',
    args: [
        {
            displayName: 'App nickname',
            description: 'The nickname of the app under test',
            type: 'string',
            placeholder: "FooAPI",
            defaultValue: ""
        },
        {
            displayName: 'Environment',
            description: 'The environment where the app is being tested',
            type: 'string',
            placeholder: "PROD",
            defaultValue: ""
        }
    ],
    async run (context, appNickName, environment) {
        return getRequestId(appNickName, environment);
    },
    liveDisplayName (context) {
        let values = context.map(c => c.value);
        return "Generated Request ID - " + getRequestId(...values);
    }
}];