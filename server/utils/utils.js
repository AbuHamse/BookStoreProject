export function getRandomCompany(companies){
            return companies[Math.floor(Math.random() * companies.length)]
        }


export function getRandomAge(){
    return Math.floor(Math.random() * 90)
}

export function randomGender(){
    const gender = ['male', 'female']

    return gender[Math.floor(Math.random()*gender.length)]
}