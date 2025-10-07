import { faker } from "@faker-js/faker/locale/es";
class UserGenerator {
  generateRandomUserUpdateData() {
    return {
      name: faker.userName(),
      email: faker.internet.email(),
    };
  }
}

export default UserGenerator;
