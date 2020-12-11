import './Workout.css';
import exo1 from './exo1_abs.png';
import exo2 from './exo2_abs.png';
import exo3 from './exo3_abs.png';
import exo4 from './exo4_abs.png';
import exo5 from './exo5_abs.png';
import exo6 from './exo6_abs.png';
import exo7 from './exo7_abs.png';


function CoreWorkout() {
    return (
        <div className="background">
            <div className="container">
                <div className="heading">CORE WORKOUT</div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                <div className="ex_container">
                    <div>
                        <img src={exo1} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Bicycle crunch</div>
                        <div className="title_content">Targets: <a>Core,Quadriceps,Back</a></div>
                        <div className="title_content">Description: <a>Lie on your back and bring your legs to a tabletop position. Bend your elbows and put your hands behind your head. Crunch up and bring your right elbow to your left knee, straightening your right leg. Release the crunch slightly. Bend your right leg and straighten your left leg, then bring your left elbow to your right knee.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo2} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Sit ups</div>
                        <div className="title_content">Targets: <a>Core,Harmstrings,Back</a></div>
                        <div className="title_content">Description: <a>Lie on your back with bent knees and your feet anchored. Tuck your chin into your chest to lengthen the back of your neck. Interlace your fingers at the base of your skull, cross your arms with your hands-on opposite shoulders, or place your palms down alongside your body. Exhale as you lift your upper body up toward your thighs. Inhale as you slowly lower yourself back down to the floor.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo3} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Moutain climbers</div>
                        <div className="title_content">Targets: <a>Core,Shoulders,Arms</a></div>
                        <div className="title_content">Description: <a>Get into a plank position. Pull your right knee into your chest as far as you can. Switch legs, pulling one knee out and bringing the other knee in.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo4} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Flutter kicks</div>
                        <div className="title_content">Targets: <a>Core,Gluts,Quadriceps</a></div>
                        <div className="title_content">Description: <a>Lie on your back and extend your legs up to a 45-degree angle. Keep your arms straight and in line with the floor, palms facing down. Lift your head, neck and shoulders slightly off the ground. Keeping your legs stick straight and glued together with your toes pointed, start lowering one leg. Raise your lowered leg and lower the other, focusing on keeping your core engaged.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo5} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Legs raise</div>
                        <div className="title_content">Targets: <a>Core,Quadriceps,Gluts</a></div>
                        <div className="title_content">Description: <a>Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they’re just above the floor. Hold for a moment. Raise your legs back up.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo6} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Superman</div>
                        <div className="title_content">Targets: <a>Back,Core,Shoulders</a></div>
                        <div className="title_content">Description: <a>Lay face down on a mat or flat surface, with arms outstretched. Keep your hands and arms straight throughout the exercise. Raise your hand and legs 4-5 inches off the ground. Hold for 5 seconds, then return to starting position.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo7} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Plank</div>
                        <div className="title_content">Targets: <a>Core,Gluts,Shoulders</a></div>
                        <div className="title_content">Description: <a>Begin in the plank position, face down with your forearms and toes on the floor. Your elbows are directly under your shoulders and your forearms are facing forward. Your head is relaxed, and you should be looking at the floor. Engage your abdominal muscles, drawing your navel toward your spine. Keep your torso straight and rigid and your body in a straight line from ears to toes with no sagging or bending.</a></div>
                        <div className="title_content">Time: <a>2min</a></div>
                    </div>
                </div>

                <button className="main__btn"><a>FINISH</a></button>
            </div>
        </div>
    );
}

export default CoreWorkout;