const multer = require("multer");

// storage used with Multer library to define where to save files on server, and how to save filename
var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, __dirname + '/../../public/upload')
    },
    filename: function (req: any, file: any, cb: any) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, file.originalname + '-' + Date.now() + '-' + getExtension(file));
        } else {
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }

    }
});

function getExtension(file: any) {
    var res = '';
    if (file.mimetype === 'image/jpeg') res = '.jpg';
    if (file.mimetype === 'image/png') res = '.png';
    return res;
}

export const upload = multer({
    storage: storage,
    // limits: { fileSize: 1048576, files: 1 } // limit file size to 1048576 bytes or 1 MB
    //,fileFilter: // TODO limit types of files. currently can upload a .txt or any kind of file into uploads folder
}).fields([ // fields to accept multiple types of uploads
    { name: "image", maxCount: 1 },// in <input name='fileName' />
    { name: "product_image[0][image]", maxCount: 1 },// in <input name='fileName' />
    { name: "product_image[1][image]", maxCount: 1 },// in <input name='fileName' />
    { name: "product_image[2][image]", maxCount: 1 },// in <input name='fileName' />
    { name: "product_image[3][image]", maxCount: 1 },// in <input name='fileName' />
    { name: "product_image[4][image]", maxCount: 1 },// in <input name='fileName' />
]);
