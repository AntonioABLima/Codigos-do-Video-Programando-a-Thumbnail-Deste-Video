var particulas = []
var espaçoEntreParticulas
var r 
var g 
var b 
var backgroundAlpha 
var raioCirculo 
var multiplicador

function setup() {
	createCanvas(800, 800); 
	background(30, 30, 30); 

	espaçoEntreParticulas = random (20, 40);
	
	for (var x = 0; x < width; x += espaçoEntreParticulas) {
		for (var y = 0; y < height; y += espaçoEntreParticulas) {
			var ponto = createVector(x, y);
			particulas.push(ponto);
		}
	}
  
	raioCirculo = random(1, 10);
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
	backgroundAlpha = random(0, 30);
	espaçoEntreParticulas = random (10, 30);
	multiplicador = random(0.001, 0.006);
	
	fill(r, g, b); // Adicionando uma corzinha

}

function draw(){
	noStroke(); // Retirando a borda do circulo
	background(30, backgroundAlpha);

	for(var i = 0; i < particulas.length; i++){
		var x = particulas[i].x, y = particulas[i].y;
		var angle = noise(x * multiplicador, y * multiplicador) * 360;
        particulas[i].add(createVector(cos(angle), sin(angle)));

		var opacidade = map(dist(width/2, height/2, x, y), 0, width/2, width/2, 0);
        fill(r, g, b, opacidade);

		if(dist(width / 2, height / 2, x, y) < width / 2){
			ellipse(x, y, raioCirculo);
		}else {
            particulas[i].x = random(width);
			particulas[i].y = random(height);
		}
    }

	fill(r, g, b);
	stroke(30, 200);
	strokeWeight(20);
	textAlign(CENTER, CENTER);
	textSize(120);
	text('Subscribe', width / 2, height / 2);
}