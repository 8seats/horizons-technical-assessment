export const saveTasksToServer = async (tasks: any[]) => {
  return await new Promise<string>((resolve, reject) => {
    // Simulating a really show server save
    setTimeout(() => {
      // Here you would normally save tasks to the server
      console.log("Tasks saved to server:", tasks);
      resolve("ok");
    }, 1000);
  });
};
