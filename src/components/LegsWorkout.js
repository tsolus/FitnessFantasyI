import './Workout.css';
import exo1 from './exo1_legs.png';
import exo2 from './exo2_legs.png';
import exo3 from './exo3_legs.png';
import exo4 from './exo4_legs.png';
import exo5 from './exo5_legs.png';
import exo6 from './exo6_legs.png';
import exo7 from './exo7_legs.png';


function LegsWorkout() {
    return (
        <div className="background">
            <div className="container">
                <div className="heading">LEGS WORKOUT</div>


                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>
                <div className="ex_container">
                    <div>
                        <img src={exo1} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Jump squats</div>
                        <div className="title_content">Targets: <a>Quadriceps,Gluts,Harmstrings</a></div>
                        <div className="title_content">Description: <a>Start standing with feet hip distance apart and lower into a squat position by bending the knees. Keep the spine straight, chest lifted, and knees behind toes. Arms are in front of the chest for balance. Jump straight up and swing arms overhead. Return to squat.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo2} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Squats</div>
                        <div className="title_content">Targets: <a>Quadriceps,Gluts,Harmstrings</a></div>
                        <div className="title_content">Description: <a>Start standing with feet just wider than hip-width apart, toes pointed slightly out, clasp hands at chest for balance. Initiate the movement by sending the hips back. Bend knees to lower down as far as possible with chest lifted in a controlled movement. Keep lower back neutral. Press through heels to stand back up to starting position. Repeat.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo3} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Lunges</div>
                        <div className="title_content">Targets: <a>Gluts,Quadriceps,Core</a></div>
                        <div className="title_content">Description: <a>Stand tall with feet hip-width apart. Engage your core. Take a big step forward with right leg. Start to shift your weight forward so heel hits the floor first. Lower your body until right thigh is parallel to the floor and right shin is vertical. It’s OK if knee shifts forward a little as long as it doesn’t go past right toe. If mobility allows, lightly tap left knee to the floor while keeping weight in right heel. Press into right heel to drive back up to starting position. Repeat on the other side.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo4} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Bridge</div>
                        <div className="title_content">Targets: <a>Gluts,Harmstrings,Core</a></div>
                        <div className="title_content">Description: <a>Lie on your back with your hands at your sides, knees bent, and feet flat on the floor under your knees. Tighten your abdominal and buttock muscles by pushing your low back into the ground before you push up. Raise your hips to create a straight line from your knees to shoulders. Squeeze your core and pull your belly button back toward your spine. Hold for 20 to 30 seconds, and then return to your starting position (Avoid raising your hips too high).</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo5} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Plank do downward dog</div>
                        <div className="title_content">Targets: <a>Core,Gluts,Chest</a></div>
                        <div className="title_content">Description: <a>Start on your hands and knees. Keep your shoulders directly above your wrists and your hips over your knees. Tuck your toes under and straighten your legs. Your core should be engaged, and don’t let your back sag or your shoulders scrunch up toward your ears. Relax your head and neck. You’re in Plank Pose. Press your hips and butt back. Push away slightly with your arms as you engage your core. You’ll be in an upside down, V-shaped pose.</a></div>
                        <div className="title_content">Time: <a>2min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo6} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Donkey kick</div>
                        <div className="title_content">Targets: <a>Gluts,Core,Shoulders</a></div>
                        <div className="title_content">Description: <a>Get on all fours, with your hands stacked directly under shoulders, and knees under hips. Make sure your back is flat and tuck your chin slightly, so the back of your neck is facing the ceiling. Without rounding your spine, engage your lower abdominals. Keeping the 90-degree bend in your right knee, slowly lift your leg straight back and up toward the ceiling.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <div style={{ borderTop: "2px solid lightgray", marginTop: 15 }}></div>

                <div className="ex_container">
                    <div>
                        <img src={exo7} className="image" />
                    </div>
                    <div>
                        <div className="ex_title">Side lunge</div>
                        <div className="title_content">Targets: <a>Quadriceps,Gluts,Adductors</a></div>
                        <div className="title_content">Description: <a>Stand with your feet shoulder-width apart, facing straight ahead. Shift your weight to your right leg and lower your body, bending your right knee and pushing your butt back. Keep your left foot flat on the floor and your left leg straight. Without raising yourself all the way to standing, shift your weight to your left side. Alternate sides.</a></div>
                        <div className="title_content">Time: <a>1min</a></div>
                    </div>
                </div>

                <button className="main__btn"><a>FINISH</a></button>
            </div>
        </div>
    );
}

export default LegsWorkout;