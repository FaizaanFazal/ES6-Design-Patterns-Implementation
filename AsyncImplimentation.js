function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  // Assync function implementation
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds(); // await will wait for the result which takes 2 seconds to come and then proceed to next line
    console.log(result);
  }
  
  asyncCall();