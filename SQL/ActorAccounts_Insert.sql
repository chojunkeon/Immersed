USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[ActorAccounts_Insert]    Script Date: 1/3/2023 12:34:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-11-16>
 --Description: <Select by Id for Actor Accounts>
 --Code Reviewer:<Arenas, Jay>
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE: <2022-11-16>
 --Code Reviewer: 
 --Note: 
 --=============================================
ALTER proc [dbo].[ActorAccounts_Insert]
			
			@UserName nvarchar(100)
			,@Password nvarchar(50)
			,@AvatarUrl nvarchar(255)
			,@ZoneId int
			,@ActorId int
			,@AccountStatusId int
			,@CreatedBy int
			,@ModifiedBy int
			,@Id int OUTPUT
		
AS
/*------------------TestCode--------------------------

Declare		@UserName nvarchar(100) = 'Insert_Test'
			,@Password nvarchar(50)= 'Insert_Test123'
			,@AvatarUrl nvarchar(255)= 'Insert_Test@gmail.com'
			,@ZoneId int =1
			,@ActorId int =1
			,@AccountStatusId int =1
			,@CreatedBy int=8
			,@ModifiedBy int=8
			,@Id int =0

Execute dbo.ActorAccounts_Insert 
						@UserName 
						,@Password
						,@AvatarUrl 
						,@ZoneId
						,@ActorId 
						,@AccountStatusId 
						,@CreatedBy
						,@ModifiedBy
						,@Id OUTPUT


*/

BEGIN

	Insert Into dbo.ActorAccounts
			([UserName]
			,[Password]
			,[AvatarUrl]
			,[ZoneId]
			,[ActorId]
			,[AccountStatusId]
			,[CreatedBy]
			,[ModifiedBy])

	Values 
			(@UserName
			,@Password
			,@AvatarUrl
			,@ZoneId
			,@ActorId
			,@AccountStatusId
			,@CreatedBy
			,@ModifiedBy)

		SET @Id = SCOPE_IDENTITY()
END