const { getPhone } = require("./controller");

const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
test("test", () => {
  expect(getPagination(3, 10)).toEqual({ limit: 10, offset: 30 });
});

test("get singile phone' ", async () => {
  const data = await getPhone();
  expect(data).toBe({});
});
