export class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
			<div class="card shadow-sm col-md-4 m-2" style="width: 17rem;">
				<img src="${this.image}" alt="${this.manufacture} ${
      this.model
    }" class="card-img-top img-fluid" style="width: 100%; height: 200px; object-fit: cover;>
				<div class="card-body">
						<h5 class="card-title mt-2">${this.manufacture} ${this.model}</h5>
						<h6 class="card-subtitle mb-2 text-muted">Rp ${this.rentPerDay.toLocaleString(
              "id-ID",
              { minimumFractionDigits: 0 }
            )} / hari</h6>
						<p class="card-text">${this.description}</p>
						<p>
							<span>
								<img src="./icons/fi_users.png" alt="" />
							</span>
							${this.capacity} orang
						</p>
						<p>
							<span>
								<img src="./icons/fi_settings.png" alt="" />
							</span>
							${this.transmission}
						</p>
						<p>
							<span>
								<img src="./icons/fi_calendar.png" alt="" />
							</span>
							Tahun ${this.year}
						</p>
						<a href="#" class="btn btn-success mt-auto mb-2">Pilih Mobil</a>
				</div>
			</div>
    `;
  }
}
