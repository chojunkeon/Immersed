USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatars_Update]    Script Date: 1/3/2023 12:36:50 PM ******/
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

ALTER proc [dbo].[Avatars_Update]
		@Id int
		,@FileId int
		,@CreatedBy int 

as
/*
	Declare @Id int = 1
			,@FileId int = 2

	EXECUTE dbo.Avatars @Id
			@FileId

*/

Begin

	Update dbo.Avatars
	SET	FileId = @FileId
		,CreatedBy = @CreatedBy

	Where Id= @Id

End