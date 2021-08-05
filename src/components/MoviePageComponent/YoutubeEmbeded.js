const YoutubeEmbeded = () => {
    return (<>
    
    <div className="aspect-w-16 aspect-h-9">
    <iframe
      src='https://www.youtube.com/embed/Up81uR5z88w'
      className=" object-contain h-48 w-full px-5 mb-3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <div className="px-5">hi</div>
  </div>
    </> );
}
 
export default YoutubeEmbeded;