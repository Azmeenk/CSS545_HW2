HW2
Part 1 is available in Part1.txt

Various approaches to storage management on a typical mobile platform, such as iOS or Android are as follows. These methods are commonly used in mobile app development projects.
1. Local Storage (SharedPreferences on Android, UserDefaults on iOS)
Pros:
Simple to use: Easy for storing small amounts of data like settings and user preferences.
Fast access: Quick read and write access since the data is stored locally on the device.
Cons:
Limited capacity: Not suitable for storing large amounts of data or complex objects.
Not secure: Data is stored in plain text, unless additional encryption is implemented.

2. File System Storage
Pros:
Flexibility: Can store various types of data such as images, audio, and large documents.
Direct control: Developers have direct control over file paths and storage directories.
Cons:
File management: Requires careful management of files and directories, which can complicate the code.
No query support: Unlike databases, retrieving specific data can be cumbersome as it lacks query capabilities.

3. Cloud Storage (Firebase, AWS)
Pros:
Scalability: Easily scales to accommodate growing data needs without handling server infrastructure.
Data synchronization: Offers real-time data syncing across multiple devices and platforms.
Cons:
Dependency on internet: Requires internet access to fetch and store data.
Cost: Can become expensive as usage increases, depending on the service provider’s pricing model.

4. Keychain Storage (iOS), Keystore (Android)
Pros:
Security: Provides a secure way to store small pieces of data, especially credentials and tokens.
Encryption: Data is encrypted by default, making it a safe choice for sensitive information.
Cons:
Limited to small data: Not suitable for large data storage needs.
Platform-specific implementation: Requires understanding of platform-specific implementation, which can increase development time.

Part 2
App that demonstrates:
Store AND Load a media item locally (e.g. music, video, image)
Store AND Load user settings locally