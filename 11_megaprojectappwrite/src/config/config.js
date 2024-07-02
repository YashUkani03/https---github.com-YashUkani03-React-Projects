const config = {
    appwriteURL: String(process.env.REACT_APP_APPWRITE_URL), 
    appwriteProjectID: String(process.env.REACT_APP_APPWRITE_PROJECT_ID) ,
    appwriteCollectionID: String(process.env.REACT_APP_APPWRITE_COLLECTION_URL), 
    appwriteDatabaseID: String(process.env.REACT_APP_APPWRITE_DATABASE_URL) ,
    appwriteBucketID: String(process.env.REACT_APP_APPWRITE_BUCKET_URL) 
    
}

export default config;