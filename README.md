# Request ID Generator

Request ID generator is an Insomnia plugin that adds a template tag for generating unique formatted request IDs to your requests

## Parameters
The following parameters are optional and allow formatting of the generated request ID
#### App Nickname
The nickname of the app under test.<br/>
Type: *String*
#### Environment
The environment where the app is being tested (e.g. - staging, PRD, etc.)<br />
Type: *String*

## Details
For making each request ID unique, the current Unix epoch time is appended to the string returned. Thus, the format of the generated request ID will be:
```
<App Nickname>-<Environment>-<Unix epoch time>
```
In absence of one or more parameters, the corresponding entry in the request ID will be skipped.

## Usage
The plugin is not currently available as an NPM package and thus needs to be manually imported into the local plugins folder for Insomnia. Details are available [here](https://docs.insomnia.rest/insomnia/introduction-to-plugins/#plugin-file-location)

The final file structure after import will be
```
<OS-specific base>/insomnia-plugin-reqid-generator
 ├── package.json
 ├── main.js
 ├── LICENSE
 └── README.md
 ```

 ## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This plugin is distributed under the permissive [MIT License](https://choosealicense.com/licenses/mit/)