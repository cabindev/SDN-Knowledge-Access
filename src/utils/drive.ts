export function convertDriveLink(originalLink: string) {
    const driveLinkRegex = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view/;
    const match = originalLink.match(driveLinkRegex);

    if (match && match.length === 2) {
        const fileId = match[1];
        const convertedLink = "https://drive.google.com/uc?id=" + fileId;
        return convertedLink;
    } else {
        return null;
    }
}
