Meteor.methods({
  'github.find'(values) {
    let location = '';
    console.log(values);
    if (values.switchValue) {
      location = 'location:oaxaca+';
    }
    const result = HTTP.get(`https://api.github.com/search/users?q=${location}language:${values.fieldValue}+type:user&sort=followers&order=desc`, {
      headers: {
        "User-Agent": "manduks"
      }
    });
    return result.data;
  }
});
