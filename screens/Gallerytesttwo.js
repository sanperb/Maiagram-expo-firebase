firebase.storage().ref().child('filename').list().then(result => {
    // Loop over each item
    result.items.forEach(pics => {
        firebase.storage().ref().child(pics.fullPath).getDownloadURL().then((url) => {
            console.log(url);
            //these url will be used to display images
         })
     });
})