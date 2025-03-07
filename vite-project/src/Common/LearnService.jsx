// READ operation - get all lessons in Parse class Lesson
export const getAllLessons = (myPost) => {
    const Lesson = Parse.Object.extend("Lesson");
    const query = new Parse.Query(Lesson);
    query.equalTo("post", myPost);
    return query.find().then((results) => {
      // returns array of Lesson objects
      return results;
    });
  };
  