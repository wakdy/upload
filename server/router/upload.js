const express = require('express')
const multer = require('multer')
// 试试
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/course/upload/files')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })


const upload = multer({ storage })
const router = express.Router()

// controller
router.get('/page', (req,res) => {
    console.log(req)
    res.render('upload', { url: req.url })
})

// 接收上传文件
router.post('/action', upload.array('file'), (req, res) => {
    console.log(req, 'req uplod action')
    console.log(req.body, 'req body')
    console.log(req.files, 'req.files')
    res.json({ success: true })
})
module.exports = router