const VideoFundo = () => {
    return ( 
        <div>
            {/* VÍDEO DE FUNDO  */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/10532470-uhd_3840_2160_30fps.mp4" type="video/mp4"/>
                </video>
            </div>

            {/* CAMADA ESCURA*/}
            <div className="fixed inset-0 z-[-5] bg-black/60"></div>
        </div>
    )
}
 
export default VideoFundo;