
const getCroppedImageUrl = (url: string) => {
    if(!url) return '';
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    const newURL = url.slice(0, index-1) + '/crop/600/400/' + url.slice(index);

    return newURL;
}

export default getCroppedImageUrl;