USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[TraineeAccounts_Insert]    Script Date: 1/3/2023 12:37:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- =============================================

-- =============================================

ALTER proc [dbo].[TraineeAccounts_Insert]
           @Username nvarchar(100)
           ,@Password nvarchar(100)
           ,@AvatarUrl nvarchar(255)
           ,@ZoneId int
           ,@TraineeId int
           ,@AccountStatusId int
           ,@CreatedBy int
           ,@ModifiedBy int
		   ,@Id int OUTPUT
AS

/* ----- Test Code -----
	
	SELECT *
	FROM dbo.TraineeAccounts
	

	DECLARE @Username nvarchar(100) = 'TReUseame'
           ,@Password nvarchar(100) = 'Teewd'
           ,@AvatarUrl nvarchar(255) = 'Tevirl'
           ,@ZoneId int = 5
           ,@TraineeId int = 7
           ,@AccountStatusId int = 3
           ,@CreatedBy int = 22
           ,@ModifiedBy int = 22		   
		   ,@Id int

	EXECUTE [dbo].[TraineeAccounts_Insert]
			@Username
           ,@Password
           ,@AvatarUrl
           ,@ZoneId
           ,@TraineeId
           ,@AccountStatusId
           ,@CreatedBy
           ,@ModifiedBy
		   ,@Id OUTPUT

	SELECT *
	FROM dbo.TraineeAccounts
	WHERE Id = @Id

*/

BEGIN

	INSERT INTO [dbo].[TraineeAccounts]
			   ([Username]
			   ,[Password]
			   ,[AvatarUrl]
			   ,[ZoneId]
			   ,[TraineeId]
			   ,[AccountStatusId]
			   ,[CreatedBy]
			   ,[ModifiedBy]
			   )		   

		VALUES
				(@Username
				,@Password
				,@AvatarUrl
				,@ZoneId
				,@TraineeId
				,@AccountStatusId
				,@CreatedBy
				,@ModifiedBy)

	SET @Id = SCOPE_IDENTITY()

END