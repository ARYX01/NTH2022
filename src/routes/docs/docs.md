
The result is proportional to the input signal amplitude. Amplitude is calculated with the equation below.

![Funkcija sum](sum.png)

After calculating the amplitudes, the correction coefficients, used for calibration, are applied to each calculated amplitude. All correction coefficients are 1, so the amplitude stays the same.

![funkcija za izracun](enacba.png)

The position calculation method is selectable between diagonal and orthogonal pickup positioning. We used orthogonal positioning, which is represented below.

![Ortogonalna postavitev](ortogonal.jpg)

The position of the point (x,y) is calculated with equations:

![koordinata x](pozX.png)
![koordinata y](pozY.png)

The connection is made with HTTP protocol from Libera Spark.
Values are recieved from local network REST API: http://192.168.1.66/api. 
POST request parameters:

`{`

`	"cmd"	: "signal", `

`	"path"	: "application.signals.adc",`

`	"size"	: 100, `

`	"offset": 8`

`}`

