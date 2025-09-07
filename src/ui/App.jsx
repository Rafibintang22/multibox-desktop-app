import "./App.css";

function App() {
    return (
        <div className="w-screen h-screen">
            <video
                src="https://ik.imagekit.io/di92mtawu/sample-video.mp4?updatedAt=1757238087416"
                autoPlay
                muted
                playsInline
                loop
                onCanPlay={(e) => e.target.play()}
                className="w-screen h-screen object-cover"
                controls
            />
        </div>
    );
}

export default App;
