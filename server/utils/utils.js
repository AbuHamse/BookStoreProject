export function getRandomCompany(companies) {
  return companies[Math.floor(Math.random() * companies.length)];
}

export function getRandomAge() {
  return Math.floor(Math.random() * 90);
}

export function randomGender() {
  const gender = ["male", "female"];

  return gender[Math.floor(Math.random() * gender.length)];
}

export function randomDate() {
  const start = new Date(1800, 0, 1);
  const end = new Date(2025, 11, 31);

  return new Date(
    start.getTime() + Math.random() * end.getTime() - start.getTime(),
  );
}

export function generateQuantity() {
  return Math.floor(Math.random() * 50);
}

export function generateRatings() {
  return Math.floor(Math.random() * 5);
}

export async function syncSchema(model){
    try {
       await model.syncIndexes()
       console.log(`Synced Indexes To Schema ${model.modelName}`)
    } catch (error) {
        console.log(error.message)
        
        
    }
}