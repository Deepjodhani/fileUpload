const File = require("../Modells/File");
const router = require("../Routers/FileUpload");

exports.localFilep = async (req, res)=>{
    try {
        const fi = req.files.fi;
        console.log("Here is file" + fi);

        let path = __dirname + "/files/" + Date.now() + `.${fi.name.split('.')[1]}`;
        console.log("Path is:" + path);

        fi.mv(path, (error) => {
    if (error) {
        console.error("File move failed:", error);
    } else {
        console.log("File moved successfully");
    }
});


        res.status(200).json({
            success:true,
            message:"File uploaded Successfully"
        });

    } catch (error) {
        console.log("There is some problem in uploading file");
        console.log(error);
    }
}