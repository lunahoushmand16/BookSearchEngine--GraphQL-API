export interface GoogleAPIVolumeInfo {
  title: string;
  authors: string[];
  description: string;
  infoLink?: string; // ✅ add this line
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

export interface GoogleAPIBook {
    id: string;
    volumeInfo: GoogleAPIVolumeInfo;
}
