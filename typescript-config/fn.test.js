const fn = require('./fn');

// Matcher => toBe 영역에 들어가는 함수들을 Matcher라 한다.
test('1은 1이야.', () => {
    expect(1).toBe(1);
});

test("2더하기 3은 5야.", () => {
    expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5가 아니야.", () => {
    expect(fn.add(3, 3)).not.toBe(5);
});

test("3 더하기 3은 5가 아니야.", () => {
    expect(fn.add(3, 3)).not.toEqual(5);
});

// 객체 검사의 경우 deep equlity 검사가 필요해 toBe (x), toStrictEqual(o) 사용
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser('Mike', 30)).toBe({
        name: 'Mike',
        age: 30
    });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser('Mike', 30)).toStrictEqual({
        name: 'Mike',
        age: 30
    });
});

// toBeNull
// toBeUndefined
// toBeDefined

test("null은 null입니다.", () => {
    expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test("0은 false 입니다", () => {
    expect(fn.add(1, -1)).toBeFalsy();
});

test("문자열 테스트", () => {
    expect(fn.add("hello", "world")).toBeTruthy();
})