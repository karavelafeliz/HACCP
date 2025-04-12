function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={https://youtu.be/fqxNYjDFJUk?si=iB3ciYkoU6KLm83T}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }