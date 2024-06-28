export default function Projects() {
  return (
    <div style={{ padding: '20px', color: '#fff', background: '#000' }}>
      <h1>My Projects</h1>
      <div>
        <h2>Project 1</h2>
        <img src="/images/project1.png" alt="Project 1" />
        <audio controls>
          <source src="/audio/project1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <video width="320" height="240" controls>
          <source src="/videos/project1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}