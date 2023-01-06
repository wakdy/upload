

export function upload() {
    const files = document.getElementById('file').files
    const formData = new FormData()

    Array.prototype.forEach.call(files, file => {
        formData.append('file', file)
    });
    formData.append('name', 'aaa')

    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', function(){
        if(this.status === 200) {
            console.log(this.response)
        }
    })
    xhr.open('POST', '/upload/action', true)
    xhr.send(formData)
}