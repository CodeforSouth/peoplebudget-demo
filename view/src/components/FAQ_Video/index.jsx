import React from 'react';
import Style from './index.module.css';

const Video = () => {
    return (
        <section>
            <div className={Style.grid}>
                <iframe
                    title="FAQ_VIDEO"
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
            </div>
        </section>
    );
};

export default Video;
