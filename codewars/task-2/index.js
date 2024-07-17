// Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

// One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

// Let's give this a try. We'll create a function match (job_matching in Python) which takes a candidate and a job, which will return a Boolean indicating whether the job is a valid match for the candidate.

// A candidate will have a minimum salary, so it will look like this:

// let candidate = {
//   minSalary: 120000
// }
// A job will have a maximum salary, so it will look like this:

// let job = {
//   maxSalary: 140000
// }
// If either the candidate's minimum salary or the job's maximum salary is not present, throw an error.

// For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary. However, let's also include 10% wiggle room (deducted from the candidate's minimum salary) in case the candidate is a rockstar who enjoys programming on Codewars in their spare time. The company offering the job may be able to work something out.

function match(candidate, job) {
  function UserException(message) {
    //console.log(this);
    this.message = message;
    this.name = "NoSalary";
  }

  if (!candidate.minSalary || !job.maxSalary) {
    throw new UserException("Missing salary information");
  }

  const adjustedMinSalary = candidate.minSalary * 0.9;
  return adjustedMinSalary <= job.maxSalary;
}
/**
 |============================
 | 
 |============================
*/
// const candidate1 = { minSalary: 150000 };
// const job1 = { maxSalary: 180000 };

// console.log(match(candidate1, job1));

const candidate4 = { minSalary: 0 };
const job4 = { maxSalary: 180000 };

try {
  console.log(match(candidate4, job4));
} catch (e) {
  if (e.name === "NoSalary") {
    console.error(e.message);
  } else {
    throw e;
  }
}
