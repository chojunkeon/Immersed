USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatars_Insert_Batch]    Script Date: 1/3/2023 12:36:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-12-7>
 --Description: <Avatar BackEND>
 --Code Reviewer:
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE:
 --Code Reviewer: 
 --Note: 
 --=============================================

ALTER proc [dbo].[Avatars_Insert_Batch]
			@fileIdUserIdTable dbo.IntFileIdUserIdTable READONLY
as

/*
	Declare @fileIdUserIdTable dbo.IntFileIdUserIdTable
			
	Insert into @fileIdUserIdTable (FileId,UserId)
	Values(3,8)
	Insert into @fileIdUserIdTable (FileId,UserId)
	Values(4,17)
	Execute dbo.Avatars_Insert_Batch @fileIdUserIdTable

*/

BEGIN
	
	Insert into dbo.Avatars (FileId
							,CreatedBy)
	Select f.FileId
			,f.UserId
	From @fileIdUserIdTable as f		
	
END