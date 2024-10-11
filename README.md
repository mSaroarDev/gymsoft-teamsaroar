# How to run this project

![Alt text](https://gymsoft-teamsaroar.vercel.app/screenshot.png "a title")

## Project Overview
This is a Project about mananging a Gymnessia. This applicatoin is designed to manage gym operations efficiently. The system defines three roles: Admin, Trainer, and Trainee, each with specific permissions. 

Admins are responsible for creating and managing trainers, scheduling classes, and assigning trainers to these schedules. Each day can have a maximum of five class schedules, with each class lasting two hours. 

Trainers conduct the classes and can view their assigned class schedules but cannot create new schedules or manage trainee profiles. 

Trainees can create and manage their own profiles and book class schedules if there is availability, with a maximum of ten trainees per schedule.

### **Relation Diagram:** 
The project used MongoDB with Mongoose. So there are no essencial database relational diagram included with this.

### **Technology Stack:** 
- Next js (Backend and Frontend)
- Redux Tookit (State Management)
- MongoDB with Mongoose (Database)

## API Endpoints:
- **Register**: https://gymsoft-teamsaroar.vercel.app/api/auth/register
- **Login**: https://gymsoft-teamsaroar.vercel.app/api/auth/register
- **Logout**: https://gymsoft-teamsaroar.vercel.app/api/auth/logout
- **My Profile**: https://gymsoft-teamsaroar.vercel.app/api/my-profile?userId=1234
- **Profile Edit**: https://gymsoft-teamsaroar.vercel.app/api/my-profile/edit?userId=1234
- **Delete User**: https://gymsoft-teamsaroar.vercel.app/api/user/delete?userId=1234
- **Create Schedule**: https://gymsoft-teamsaroar.vercel.app/api/schedule/create
- **Get Schedule**: https://gymsoft-teamsaroar.vercel.app/api/schedule/all
- **Edit Schedule**: https://gymsoft-teamsaroar.vercel.app/api/schedule/edit?id=1234
- **Denie Schedule**: https://gymsoft-teamsaroar.vercel.app/api/schedule/reject?id=1234

All Operations happens with these api only. These are reusable.


## Database models

### User Model
- name
- designation
- address
- mobile
- email
- password
- image
- role
- avaibility
- status
- member_access_status


### Schedule Model
- trainerName
- traineeName
- date
- startTime
- endTime
- currStatus
- approvalStatus
- createdBy

> **Note: All Operations used these two models only.**

## Credentials
- Admin: email: admin@mail.com, pass: 123456
- Trainer: email: trainer@mail.com, pass: 123456
- Trainee: email: trainee@mail.com, pass: 123456

## How to Run Locally
If you want to run the program locally. Just download or pull the repository and open with any code editor.

You need some setup to do this. After opening the code. Do bellow i saying.

### Step - 1
Open Terminal and run the command:
```bash
npm install
```

### Step - 2
create a file named **.env or .env.local** and paste the code. Note that you have to collect some secret credentials.
```bash
// .env.local

NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URL=your-mongodb-database-url
DB_NAME=gymsoft
JWT_SECRET=jjhgha-some-secret-code
JWT_ISSUER=localhost.com
JWT_EXPIRE=2h

# cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=collect-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=collect-preset-name
CLOUDINARY_API_KEY=collect-api-key
CLOUDINARY_API_SECRET=collect-api-secret
```

### Step - 3 (Runnig the app)
Now open your terminal and run the code
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Live Hosting Link
If you want to show the project frontend view. Just hit on this link

Open [https://gymsoft-teamsaroar.vercel.app](https://gymsoft-teamsaroar.vercel.app) with your browser to see the result.