import HomePage from "../app/Modules/Homepage";

export default function* saga() {
  try {
    yield [HomePage.saga()];
  } catch (error) {
    return;
  }
}
