# About

This template is to be used for Server Side rendered projects.
It implements a session based login strategy. Original Author: (Rafa Pacas)[https://github.com/rapala61/express_auth_student_template]

# Steps to use the template:

The best way to use it is to fork it and then use it in your own projects.
Once you have it cloned in your localhost from your fork, make sure you implement the next steps:

1. Run `npm install`
2. Change the mongo database to the one you are using in `lib/dbConnect.js` line: 5.

 `const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/new_auth_template_app';`

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
