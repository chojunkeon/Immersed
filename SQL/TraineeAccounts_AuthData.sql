USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[TraineeAccounts_AuthData]    Script Date: 1/3/2023 12:37:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER proc [dbo].[TraineeAccounts_AuthData]
			@Username nvarchar(100)
as
/*
	Declare @UserName nvarchar(100)='HeMan'
	Execute dbo.TraineeAccounts_AuthData @Username

	Select* from dbo.TraineeAccounts
*/
Begin

SELECT	[Id]
		,[Username]
		,[Password]
		,[AvatarUrl]
		,[ZoneId]
		,[TraineeId]

From dbo.TraineeAccounts

Where [Username] = @Username

End