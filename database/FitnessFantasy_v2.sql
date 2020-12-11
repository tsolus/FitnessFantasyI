use FitnessFantasy;

CREATE TABLE UserInfo(
username varchar(30) PRIMARY KEY,
pwd varchar(80),
email varchar(40),
weight int,
height int
);

INSERT INTO UserInfo (username, pwd, email, weight, height)
	VALUES 
		('Balaise', 'af123468', 'balaise.sport@free.fr', 185, 75),
        ('Rocery', 'affgdi7996', 'rocery.fitness@free.fr', 176, 62),
        ('Kaaris', '4687iydi', 'kaaris.booba@gmail.com', 193, 84),
        ('Bloom', 'alkwpi88ds', 'bloom.butterfly@hotmail.fr', 162, 58),
        ('Zebi', 'kosiuy9897', 'zebi.unix@gmail.com', 170, 49),
        ('Arino', '5745add', 'arino.torino@orange.fr', 201, 98);
        
		
CREATE TABLE UserRepetitions(
username varchar(30) PRIMARY KEY,
squat int,
pushup int,
crunches int,
pullup int,
dips int
);

CREATE TABLE UserXpStats(
username varchar(30),
period date,
height int,
weight int,
lvl int,
xp int,
strength int,
stamina int,
agility int
);

INSERT INTO UserXpStats (username, period, height, weight, lvl, xp, strength, stamina, agility)
	VALUES 
		('Balaise', '2008-10-20', 185, 75, 0, 0, 50, 100, 30),
        ('Balaise', '2008-12-14', 185, 76, 0, 98, 52, 105, 34),
		('Balaise', '2009-03-12', 186, 79, 2, 53, 60, 114, 35),
		('Balaise', '2009-08-17', 190, 81, 6, 67, 74, 110, 42),
        ('Balaise', '2009-11-08', 191, 78, 7, 88, 75, 112, 45),
        ('Balaise', '2010-02-05', 190, 77, 8, 45, 73, 112, 48),
        ('Balaise', '2010-10-11', 192, 85, 12, 74, 78, 120, 56),
        ('Balaise', '2011-05-23', 193, 83, 14, 36, 75, 117, 51),
        ('Balaise', '2011-09-30', 192, 81, 15, 44, 77, 118, 53),
        ('Balaise', '2012-01-28', 193, 82, 17, 58, 81, 122, 55);


CREATE TABLE Exercise(
exerciseId int NOT NULL AUTO_INCREMENT PRIMARY KEY,
exerciseName varchar(30),
muscle1 varchar(30),
muscle2 varchar(30),
muscle3 varchar(30),
explanation varchar(1000)
);

INSERT INTO Exercise (exerciseName, muscle1, muscle2, muscle3, explanation)
	VALUES 
		('Lunges', 'Gluts','Quadriceps','Core','Stand tall with feet hip-width apart. Engage your core. Take a big step forward with right leg. Start to shift your weight forward so heel hits the floor first. Lower your body until right thigh is parallel to the floor and right shin is vertical. It’s OK if knee shifts forward a little as long as it doesn’t go past right toe. If mobility allows, lightly tap left knee to the floor while keeping weight in right heel. Press into right heel to drive back up to starting position. Repeat on the other side.'),
        ('Squats','Quadriceps','Gluts','Harmstrings','Lower your hips from a standing position and then stands back up.'),
        ('Pistol Squats','Quadriceps','Gluts','Harmstrings','Stand on one leg and drop into a deep squat, pointing the raised leg out straight out in front of you.'),
        ('Jump Squats','Quadriceps','Gluts','Harmstrings','Start standing with feet hip distance apart and lower into a squat position by bending the knees. Keep the spine straight, chest lifted, and knees behind toes. Arms are in front of the chest for balance. Jump straight up and swing arms overhead. Return to squat.'),
        ('Jumping Jacks','Core','Back','Adductors','Start standing up with your legs together, a slight bend in knees, and hands resting on thighs. Keeping the knees bent, open the arms and legs out to the sides. Arms come above the head and legs wider than shoulders. Close your arms and legs back to your sides, returning to your start.'),
        ('Bridge','Gluts','Harmstrings','Core','Lie on your back with your hands at your sides, knees bent, and feet flat on the floor under your knees. Tighten your abdominal and buttock muscles by pushing your low back into the ground before you push up. Raise your hips to create a straight line from your knees to shoulders. Squeeze your core and pull your belly button back toward your spine. Hold for 20 to 30 seconds, and then return to your starting position (Avoid raising your hips too high).'),
        ('Plank To Downward Dog','Core','Gluts','Chest','Start on your hands and knees. Keep your shoulders directly above your wrists and your hips over your knees. Tuck your toes under and straighten your legs. Your core should be engaged, and don’t let your back sag or your shoulders scrunch up toward your ears. Relax your head and neck. You’re in Plank Pose. Press your hips and butt back. Push away slightly with your arms as you engage your core. You’ll be in an upside down, V-shaped pose.'),
        ('Donkey kick','Gluts','Core','Shoulders','Get on all fours, with your hands stacked directly under shoulders, and knees under hips. Make sure your back is flat and tuck your chin slightly, so the back of your neck is facing the ceiling. Without rounding your spine, engage your lower abdominals. Keeping the 90-degree bend in your right knee, slowly lift your leg straight back and up toward the ceiling.'),
        ('Plank','Core','Gluts','Shoulders','Begin in the plank position, face down with your forearms and toes on the floor. Your elbows are directly under your shoulders and your forearms are facing forward. Your head is relaxed, and you should be looking at the floor. Engage your abdominal muscles, drawing your navel toward your spine. Keep your torso straight and rigid and your body in a straight line from ears to toes with no sagging or bending.'),
        ('Bicycle Crunch','Core','Quadriceps','Back','Lie on your back and bring your legs to a tabletop position. Bend your elbows and put your hands behind your head. Crunch up and bring your right elbow to your left knee, straightening your right leg. Release the crunch slightly. Bend your right leg and straighten your left leg, then bring your left elbow to your right knee.'),
        ('Push Up','Chest','Shoulders','Arms','Get down on all fours, placing your hands slightly wider than your shoulders. Straighten your arms and legs. Lower your body until your chest nearly touches the floor. Pause, then push yourself back up.'),
        ('Superman','Back','Core','Shoulders','Lay face down on a mat or flat surface, with arms outstretched. Keep your hands and arms straight throughout the exercise. Raise your hand and legs 4-5 inches off the ground. Hold for 5 seconds, then return to starting position.'),
        ('Sit Up','Core','Harmstrings','Back','Lie on your back with bent knees and your feet anchored. Tuck your chin into your chest to lengthen the back of your neck. Interlace your fingers at the base of your skull, cross your arms with your hands-on opposite shoulders, or place your palms down alongside your body. Exhale as you lift your upper body up toward your thighs. Inhale as you slowly lower yourself back down to the floor.'),
        ('Flutter Kicks','Core','Gluts','Quadriceps','Lie on your back and extend your legs up to a 45-degree angle. Keep your arms straight and in line with the floor, palms facing down. Lift your head, neck and shoulders slightly off the ground. Keeping your legs stick straight and glued together with your toes pointed, start lowering one leg. Raise your lowered leg and lower the other, focusing on keeping your core engaged.'),
        ('Legs Raises','Core','Quadriceps','Gluts','Lie on your back, legs straight and together. Keep your legs straight and lift them all the way up to the ceiling until your butt comes off the floor. Slowly lower your legs back down till they’re just above the floor. Hold for a moment. Raise your legs back up.'),
        ('Legs Pull-In','Core','Back','Quadriceps','Lie on an exercise mat with your legs extended and your hands either palms facing down next to you or under your glutes. Keep your knees together and pull them in towards you while moving your torso towards them (lift your head, neck and shoulders up). Hold and then slowly return to starting position.'),
        ('Plank Arm Reachs','Core','Shoulders','Arms','Begin in a plank position with your shoulders over your wrists and your body in a straight line. Raise your right arm and hold keeping abs tight. Repeat on the other side.'),
        ('Heel Touches','Core','Back','Glutes','Start off laying with your back flat on the floor, keeping your knees bent, feet grounded and arms at your sides. Slowly reach down towards your right heel with your right arm as far as possible until you feel a stretch in your right oblique. Return to the starting position and repeat in the opposite direction.'),
        ('Russian Twist','Core','Back','Harmstrings','Sit on the floor and bring your legs out straight. Lean back slightly so your torso and legs form a V-like shape, bracing your abdominal wall to engage your core. Balancing here, twist your torso from side to side without moving your legs.'),
        ('Spiderman Plank Crunches','Core','Arms','Shoulders','Start in a forearm plank position with your elbows underneath your shoulders, feet about hips-width apart. Keeping your hips as level as possible, bend your right leg to bring your right knee as close as possible toward your right elbow. Pause, and then step back to the plank position. Repeat on your left side, bringing your left knee up to your left elbow.'),
        ('Mountain Climbers','Core','Shoulders','Arms','Get into a plank position. Pull your right knee into your chest as far as you can. Switch legs, pulling one knee out and bringing the other knee in.'),
        ('Side Lunges','Quadriceps','Gluts','Adductors','Stand with your feet shoulder-width apart, facing straight ahead. Shift your weight to your right leg and lower your body, bending your right knee and pushing your butt back. Keep your left foot flat on the floor and your left leg straight. Without raising yourself all the way to standing, shift your weight to your left side. Alternate sides.'),
        ('Opposite Arm Leg Raises','Core','Shoulders','Gluts','Start on your hands and knees, with your abdominal muscles engaged, your hands directly beneath your shoulders, and your shoulders pushed away from floor. Simultaneously lift your left arm up straight in front of you and extend your right leg into the air behind you, until they are both parallel to the ground. Slowly return to the starting position and repeat with your right arm and left leg.'),
        ('Knee Rolls','Back','Core','Adductors','Lie on your back. Roll your knees to one side, followed by your pelvis, keeping both shoulders on the floor. Hold the stretch for one deep breath and return to the starting position. Change side.'),
        ('Cat Cow Stretch','Core','Back','Gluts','inhale and tilt your pelvis back for cow pose, then exhale and tuck your tailbone for cat pose.');

#DROP TABLE Feedback;
CREATE TABLE Feedback(
feedbackNumber int NOT NULL AUTO_INCREMENT PRIMARY KEY,
username varchar(30),
email varchar(30),
feedback text NOT NULL,
suggestion varchar(1000)
);

SELECT * FROM UserInfo;
SELECT * FROM Feedback;
SELECT * FROM Exercise;
select * from UserXpStats;