// A Pick is an object:
//   {
//     id:           number,
//     title:        string,
//     creator:      string,
//     thumbnail:    string,
//     croppedImage: string,
//     curator:      string,
//     date:         string,
//     feedback:     string
//   }

// trimData :: object -> Pick
// Given whole data of a picked piece, extracts required information.
const trimData = data => {
  const { work } = data

  return {
    id: work.id,
    title: work.title,
    creator: work.createdBy.username,
    thumbnail: work.attachments[0].thumbnail.medium,
    croppedImage: data.croppedImage,
    curator: data.curator.username,
    date: data.createdDate,
    feedback: data.feedback
  }
}

export { trimData }
