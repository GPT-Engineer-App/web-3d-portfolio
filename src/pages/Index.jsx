import ParticleEffect from '../components/ParticleEffect';

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <ParticleEffect />
      <div className="absolute text-center text-white">
        <h1 className="text-3xl">Your Blank Canvas</h1>
        <p>Chat with the agent to start making edits.</p>
        </div>
    </div>
  );
};

export default Index;
